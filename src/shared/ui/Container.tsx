import styled from 'styled-components';

const Div = styled.div`
  padding-inline: 24px;
  height: inherit;
`;

interface ContainerProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children = null,
  ...props
}) => {
  return <Div {...props}>{children}</Div>;
};
