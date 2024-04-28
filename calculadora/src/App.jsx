import Button from './components/Button';
import Input from './components/Input';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrenteNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = number => {
    if (operation === '=') {
      handleOnClear();
    }
    setCurrenteNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };
  const handleOnClear = () => {
    setCurrenteNumber('0');
    setOperation('');
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrenteNumber(String(sum));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrenteNumber(String(sub));
      setOperation('');
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('*');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrenteNumber(String(mult));
      setOperation('');
    }
  };

  const handleDivtNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleOnClear();
      setOperation('/');
    } else {
      if (currentNumber === '0') {
        setOperation('');
        return setCurrenteNumber('Erro: divison by zero');
      }
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrenteNumber(String(div));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (operation !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          setFirstNumber('0');
          break;
        case '-':
          handleMinusNumbers();
          setFirstNumber('0');
          break;
        case '*':
          handleMultNumbers();
          setFirstNumber('0');
          break;
        case '/':
          handleDivtNumbers();
          setFirstNumber('0');
          break;

        default:
          break;
      }
    }
    setOperation('=');
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label='X' onClick={handleMultNumbers} />
          <Button label='/' onClick={handleDivtNumbers} />
          <Button label='C' onClick={handleOnClear} />
          <Button label='.' onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='-' onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='+' onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='=' onClick={handleEquals} />
        </Row>
        <Row>
          <Button label='0' onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
