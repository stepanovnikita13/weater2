import { Block } from '@/shared/ui/Block';
import { Flex, theme, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
const { Title, Paragraph } = Typography;

interface WeatherInfo {
  time: string;
  uv: number;
  rain: number;
  aq: number;
}

interface IndicatorsProps {
  uv: number;
  rain: number;
  aq: number;
}

export const Indicators: React.FC<IndicatorsProps> = ({ uv, rain, aq }) => {
  const { token } = theme.useToken();
  const [time, setTime] = useState<string>(getTime(new Date()));

  function getTime(date: Date) {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  const weatherInfo: WeatherInfo = {
    time,
    uv,
    rain,
    aq,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime(new Date()));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Block>
      <Flex justify='space-around'>
        {Object.keys(weatherInfo).map((key) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <Title
              level={5}
              style={{
                textTransform: 'uppercase',
                color: token.colorTextDescription,
                fontSize: '0.8rem',
                margin: 0,
              }}
            >
              {key}
            </Title>
            <Paragraph
              style={{
                fontSize: '1.1rem',
                color: token.colorTextSecondary,
                fontWeight: 600,
                margin: 0,
              }}
            >
              {weatherInfo[key as keyof WeatherInfo]}
            </Paragraph>
          </div>
        ))}
      </Flex>
    </Block>
  );
};
