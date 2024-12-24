import { Flex, Typography, Image } from 'antd';
const { Title, Text } = Typography;

interface CurrentWeatherProps {
  location: string;
  picture: string;
  temp: number;
}
export const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  picture,
  location,
  temp,
}) => {
  return (
    <Flex align='center' vertical style={{ paddingBlock: '25px' }}>
      <Image src={picture} preview={false} alt='cloudy' width='30%' />
      <Title level={2} style={{ marginBottom: 0 }}>
        {location}
      </Title>
      <Text style={{ fontSize: '6rem', lineHeight: '6rem' }}>
        {temp}
        <sup style={{ fontSize: '3rem' }}>&#176;</sup>
      </Text>
    </Flex>
  );
};
