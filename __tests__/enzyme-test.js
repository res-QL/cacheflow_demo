import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-canvas-mock';
import fetch from 'node-fetch';

import Demo from '../client/components/Demo';
import NavBar from '../client/components/NavBar';
import QueryResult from '../client/components/QueryResult';
import QueryInput from '../client/components/QueryInput';
import BarChart from '../client/components/BarChart';

configure({ adapter: new Adapter() });

xdescribe('Demo', () => {
  const state = generateState();
  let DemoComponent;

  beforeAll(() => {
    DemoComponent = shallow(<Demo />);
  });

  it('Should contain the element barChart', () => {
    expect(DemoComponent).toContainExactlyOneMatchingElement('.barChart');
  });

  it('Should contain the element QueryResult', () => {
    expect(DemoComponent).toContainExactlyOneMatchingElement('QueryResult');
  });

  it('Should contain the element demoContainer', () => {
    expect(DemoComponent).toContainExactlyOneMatchingElement('.demoContainer');
  });

  it('Should contain the element queryInput', () => {
    expect(DemoComponent).toContainExactlyOneMatchingElement('.queryInput');
  });

  it('Should have the react component Query Result', () => {
    expect(DemoComponent).toContainReact(<QueryResult items={state.items} />);
  });

  it('Should have the react component Bar Chart', () => {
    expect(DemoComponent).toContainReact(
      <BarChart
        className="barChart"
        globalData={state.globalData}
        localData={state.localData}
        lineChartLabels={state.lineChartLabels}
        lineChartData={state.lineChartData}
      />
    );
  });

  it('Should change state when we call the API when the server is running', () => {
    let stateAfterAPICall = generateState();
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: '{ getFishFromDatabase { Name Region Rate}}',
      }),
    })
      .then(res => res.json())
      .then(
        jsonRes => (stateAfterAPICall.items = jsonRes.data.getFishFromDatabase)
      )
      .then(expect(state).not.toBe(stateAfterAPICall))
      .catch(err => {
        console.log(err);
      });
  });
});

function generateState() {
  return {
    items: [],
    lineChartData: [],
    lineChartLabels: [],
    id: null,
    globalData: {
      totalNumberOfRequests: 0,
      totalTimeSaved: 0,
      sizeOfDataRedis: 0,
      sizeOfDataLocal: 0,
    },
    localData: {
      getFishToLocal: {
        firstCall: null,
        allCalls: [],
        numberOfCalls: 0,
        averageCallSpan: null,
        uncachedCallTime: 0,
        cachedCallTime: 0,
        dataSize: 0,
        storedLocation: 'local',
      },
      getFishToRedis: {
        firstCall: null,
        allCalls: [],
        numberOfCalls: 0,
        averageCallSpan: null,
        uncachedCallTime: 0,
        cachedCallTime: 0,
        dataSize: 0,
        storedLocation: 'redis',
      },
    },
  };
}

xdescribe('QueryResult', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<QueryResult />);
  });
  //expect(wrapper.find('p')).toBe(true);
  it('WRAPPER TEST', () => {
    expect(wrapper).toBe(wrapper);
  });

  it('should have className of QueryResult', () => {
    expect(wrapper).toHaveClassName('.QueryResult');
  });

  it('should have one element QueryResult', () => {
    expect(wrapper).toContainExactlyOneMatchingElement('.QueryResult');
  });

  it('should have one element response', () => {
    expect(wrapper).toContainExactlyOneMatchingElement('.response');
  });

  it('should have one element QueryResult-Header', () => {
    expect(wrapper).toContainExactlyOneMatchingElement('.QueryResult-Header');
  });

  it('Renders a <div> with the Query Response label', () => {
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.text()).toEqual('Query Response');
  });
});

describe('NavBar', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<NavBar />);
  });
  it('Renders a <div> and has the correct text', () => {
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.text()).toEqual(
      'cacheflowQL...a lightweight npm package providing developers insight into GraphQL queries and metrics concerning cached dataGitHubLinkedIn'
    );
    expect(wrapper.find('.Abstract-Container')).toHaveHTML('<p></p>');
  });
  // it('Renders a <p> tag', () => {});
});

//toBeEmptyRender

//toExist

//toContainMatchingElement

//toContainReact*/
