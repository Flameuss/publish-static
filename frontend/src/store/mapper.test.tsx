import { initialState } from '.';
import mapper from './mapper';

test('mapper#getScenarioSwitchText', () => {
  let testState = {
    ...initialState,
    compareScenarioEnabled: true,
  };

  let option = mapper.getScenarioSwitchText(testState);
  expect(option.option1).toBe('FC');
  expect(option.option2).toBe('FCplus');

  testState = {
    ...initialState,
    compareScenarioEnabled: true,
    currentScenario: 'FCplus',
  };

  option = mapper.getScenarioSwitchText(testState);
  expect(option.option1).toBe('FC');
  expect(option.option2).toBe('FCNZ');

  testState = {
    ...initialState,
    compareScenarioEnabled: true,
    currentScenario: 'FCNZ',
  };

  option = mapper.getScenarioSwitchText(testState);
  expect(option.option1).toBe('FC');
  expect(option.option2).toBe('FCplus');
});

test('mapper#getSwitchOptions', () => {
  let testState = {
    ...initialState,
    compareScenarioEnabled: true,
  };

  let options = mapper.getSwitchOptions(testState);
  expect(JSON.stringify(options)).toBe(
    JSON.stringify(['FC', 'FCplus', 'FCNZ', 'FCplusNZ']),
  );

  testState = {
    ...initialState,
    compareScenarioEnabled: true,
    currentScenario: 'FCplus',
  };

  options = mapper.getSwitchOptions(testState);
  expect(JSON.stringify(options)).toBe(
    JSON.stringify(['BASE', 'FC', 'FCNZ', 'FCplusNZ']),
  );

  testState = {
    ...initialState,
    compareScenarioEnabled: true,
    currentScenario: 'FCNZ',
  };

  options = mapper.getSwitchOptions(testState);
  expect(JSON.stringify(options)).toBe(
    JSON.stringify(['BASE', 'FC', 'FCplus', 'FCplusNZ']),
  );
});

test('mapper#getScenariosShip', () => {
  const result = mapper.getScenariosShip();
  expect(JSON.stringify(result)).toBe(
    '{"NONE":"rgba(117,117,117,1)","BASE":"rgba(215,25,28,1)","FC":"rgba(253,174,97,1)","FCplus":"rgba(229,229,171,1)","FCNZ":"rgba(171,221,164,1)","FCplusNZ":"rgba(43,131,186,1)"}',
  );
});
