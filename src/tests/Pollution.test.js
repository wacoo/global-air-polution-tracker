import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import City from '../components/City';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

const fakeData = [
  {
    name: {
      common: 'Mexico',
    },
    latlng: [23.6345, -102.5528],
    flags: {
      png: '',
    },
    capital: {
      name: 'Mexico City',
      gps: [19.4326, -99.1332],
      pollution: {
        co: '200',
        no: '30',
        nh3: '0.5',
        o3: '600',
        pm10: '12',
        pm2_5: '0.6',
        so2: '23',
      },
    },
    pollution: {
      co: '200',
      no: '30',
      nh3: '0.5',
      o3: '600',
      pm10: '12',
      pm2_5: '0.6',
      so2: '23',
    },
  },
];

describe('Test components render', () => {
  it('Tests Home', () => {
    useDispatch();
    useSelector.mockReturnValue(fakeData);
    const homeComponent = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(homeComponent).toMatchSnapshot();
  });

  it('Tests City', () => {
    useDispatch();
    useSelector.mockReturnValue(fakeData[0]);
    const homeComponent = renderer.create(
      <BrowserRouter>
        <City />
      </BrowserRouter>,
    );
    expect(homeComponent).toMatchSnapshot();
  });
});

describe('Test existance of elements in components', () => {
  it('Tests existance of the button Mexico in Home ', () => {
    useDispatch();
    useSelector.mockReturnValue(fakeData);
    render(<Home />);
    const h2 = screen.getByText('Mexico');
    expect(h2).toBeInTheDocument();
  });
  it('Tests existance of New York City entry in datail page ', () => {
    useDispatch();
    useSelector.mockReturnValue(fakeData[0]);
    render(<City />);
    const h2 = screen.getByText('Mexico City');
    expect(h2).toBeInTheDocument();
  });
});
