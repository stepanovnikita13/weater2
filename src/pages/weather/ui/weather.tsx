import { Layout, Space } from 'antd';
import cloudy from '/assets/cloudy.png';
import { Container } from '@/shared/ui/Container';
import { CurrentWeather } from './current-weather';
import { Indicators } from './indicators';
import { FiveDaysForecast, type Weather5Day } from './five-days-forecast';

const { Content } = Layout;

const weather5Day: Weather5Day = [
  { day: 'Mon', temp_min: 10, temp_max: 20, icon: cloudy },
  { day: 'Tue', temp_min: 8, temp_max: 20, icon: cloudy },
  { day: 'Wed', temp_min: 6, temp_max: 16, icon: cloudy },
  { day: 'Thu', temp_min: -3, temp_max: 10, icon: cloudy },
  { day: 'Fri', temp_min: 7, temp_max: 15, icon: cloudy },
];

export const Weather = () => {
  return (
    <Content id='main'>
      <Container>
        <Space direction='vertical' size='middle'>
          <CurrentWeather location='London' picture={cloudy} temp={31} />
          <Indicators aq={22} rain={58} uv={4} />
          <Indicators aq={22} rain={58} uv={4} />
          <FiveDaysForecast data={weather5Day} />
          <FiveDaysForecast data={weather5Day} />
          <FiveDaysForecast data={weather5Day} />
        </Space>
      </Container>
    </Content>
  );
};
