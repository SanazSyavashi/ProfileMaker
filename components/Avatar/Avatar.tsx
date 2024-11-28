//NODE_MODULES
import Avatar from '@mui/material/Avatar';
//--------------------------------------------------------------------------------

interface AvatarProps {
  src?: string;      
  size?: number; 
}
//---------------------------------------------------------------------------------

const CustomAvatar: React.FC<AvatarProps> = ({ src, size = 120 }) => {

  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        backgroundColor: src ? 'transparent' : '#ccc', 
        fontSize: size / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: src ? `url(${src})` : 'none',
        backgroundSize: 'cover',
      }}
      src={src}
    >
      {!src && <span>👤</span>} 
    </Avatar>
  );
};

export default CustomAvatar;
