import { Block } from '@/shared/ui/Block';
import { Flex, Typography, Image, theme } from 'antd';
const { Paragraph } = Typography;

interface WeatherData {
  day: string;
  temp_min: number;
  temp_max: number;
  icon: string;
}

export type Weather5Day = Array<WeatherData>;

interface FiveDaysForecaseProps {
  data: Weather5Day;
}

export const FiveDaysForecast: React.FC<FiveDaysForecaseProps> = ({ data }) => {
  const { token } = theme.useToken();
  return (
    <Block>
      <Flex>
        {data.map((day) => (
          <div key={day.day} style={{ textAlign: 'center' }}>
            <Paragraph style={{ color: token.colorTextSecondary }}>
              {day.day}
            </Paragraph>
            <Image src={day.icon} preview={false} alt='cloudy' width='50%' />
            <Paragraph
              style={{
                textWrap: 'nowrap',
                marginBottom: 0,
                marginTop: '1em',
                color: token.colorTextSecondary,
              }}
            >
              {withSign(day.temp_min)}
              ...
              {withSign(day.temp_max)}
            </Paragraph>
          </div>
        ))}
      </Flex>
    </Block>
  );
};

function withSign(temp: number) {
  return (temp > 0 ? '+' : '') + temp;
}
