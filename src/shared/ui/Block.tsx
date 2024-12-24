import { theme } from 'antd';

interface BlockProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode;
}

export const Block: React.FC<BlockProps> = ({ children = null, ...props }) => {
  return (
    <div
      style={{
        borderRadius: '11px',
        padding: '10px',
        boxShadow: theme.getDesignToken().boxShadow,
        backgroundColor: theme.getDesignToken().colorBgLayout,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
