import { Box, Typography, keyframes } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomePage = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: ' #f3f4f6',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        {/* Приветствие с анимацией */}
        <Typography
          variant="h2"
          sx={{
            color: '#374151',
            fontWeight: 'bold',
            fontFamily: "'Roboto', sans-serif",
            marginBottom: '20px',
            animation: `${slideIn} 1s ease-out`,
          }}
        >
          Welcome to Your PhoneBook
        </Typography>

        {/* Картинка с анимацией */}
        <Box
          component="img"
          src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
          alt="Contact Book"
          sx={{
            width: '300px',
            height: '300px',
            objectFit: 'contain',
            borderRadius: '16px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.7)',
            backgroundColor: '#ffffff',
            padding: '10px',
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        />
      </Box>
    </div>
  );
};

export default HomePage;
