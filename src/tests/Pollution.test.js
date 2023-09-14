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

const fakeData = {
  countries: [
    {
      name: 'United States',
      continent: 'North America',
      gps: [37.0902, -95.7129],
      map: '',
      cities: [
        {
          name: 'New York City',
          gps: [40.7128, -74.006],
        },
        {
          name: 'Los Angeles',
          gps: [34.0522, -118.2437],
        },
      ],
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
    {
      name: 'Canada',
      continent: 'North America',
      gps: [56.1304, -106.3468],
      map: '',
      cities: [
        {
          name: 'Toronto',
          gps: [43.65107, -79.347015],
        },
        {
          name: 'Vancouver',
          gps: [49.2827, -123.1207],
        },
      ],
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
    {
      name: 'Mexico',
      continent: 'North America',
      gps: [23.6345, -102.5528],
      map: '',
      cities: [
        {
          name: 'Mexico City',
          gps: [19.4326, -99.1332],
        },
        {
          name: 'Cancun',
          gps: [21.1619, -86.8515],
        },
        {
          name: 'Guadalajara',
          gps: [20.6597, -103.3496],
        },
        {
          name: 'Monterrey',
          gps: [25.6866, -100.3161],
        },
        {
          name: 'Tijuana',
          gps: [32.5149, -117.0382],
        },
      ],
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
  ],
};

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
    useSelector.mockReturnValue(fakeData.countries[0]);
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
    useSelector.mockReturnValue(fakeData.countries[0]);
    render(<City />);
    const h2 = screen.getByText('New York City');
    expect(h2).toBeInTheDocument();
  });
});
