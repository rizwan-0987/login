import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faLeaf } from '@fortawesome/free-solid-svg-icons';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%);
`;

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 24px;
  padding: 2.5rem 2rem 2rem 2rem;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${float} 5s ease-in-out infinite;
`;

const Logo = styled.div`
  background: linear-gradient(135deg, #6366f1 60%, #38bdf8 100%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #22223b;
  margin-bottom: 2rem;
  letter-spacing: 0.01em;
`;

const PillSwitch = styled.div`
  display: flex;
  background: #f1f5f9;
  border-radius: 999px;
  margin-bottom: 2rem;
  width: 220px;
  height: 40px;
  position: relative;
`;

const PillButton = styled.button`
  flex: 1;
  border: none;
  background: transparent;
  color: ${props => (props.active ? '#fff' : '#6366f1')};
  font-weight: 500;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  z-index: 1;
  transition: color 0.2s;
`;

const PillActive = styled(motion.div)`
  position: absolute;
  top: 4px;
  left: ${props => (props.islogin ? '4px' : 'calc(50% + 2px)')};
  width: calc(50% - 6px);
  height: 32px;
  background: linear-gradient(90deg, #6366f1 60%, #38bdf8 100%);
  border-radius: 999px;
  z-index: 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem 0.9rem 2.5rem;
  border: none;
  border-bottom: 2px solid #e0e7ff;
  background: transparent;
  font-size: 1rem;
  color: #22223b;
  border-radius: 0;
  transition: border-color 0.2s;
  font-family: inherit;
  &:focus {
    outline: none;
    border-bottom: 2px solid #6366f1;
    background: rgba(99, 102, 241, 0.03);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a5b4fc;
  font-size: 1.1rem;
`;

const Button = styled(motion.button)`
  margin-top: 0.5rem;
  width: 100%;
  background: linear-gradient(90deg, #6366f1 60%, #38bdf8 100%);
  color: #fff;
  padding: 0.9rem 0;
  border: none;
  border-radius: 999px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.10);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.18);
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #94a3b8;
  font-size: 0.97rem;
`;

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Container>
      <GlassCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Logo>
          <FontAwesomeIcon icon={faLeaf} color="#fff" size="lg" />
        </Logo>
        <Title>{isLogin ? 'Sign In' : 'Create Account'}</Title>
        <PillSwitch>
          <PillActive
            islogin={isLogin}
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          <PillButton
            type="button"
            active={isLogin}
            onClick={() => setIsLogin(true)}
          >
            Login
          </PillButton>
          <PillButton
            type="button"
            active={!isLogin}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </PillButton>
        </PillSwitch>
        <Form onSubmit={handleSubmit} autoComplete="off">
          {!isLogin && (
            <InputGroup>
              <Icon icon={faUser} />
              <Input type="text" placeholder="Full Name" required />
            </InputGroup>
          )}
          <InputGroup>
            <Icon icon={faEnvelope} />
            <Input type="email" placeholder="Email" required />
          </InputGroup>
          <InputGroup>
            <Icon icon={faLock} />
            <Input type="password" placeholder="Password" required />
          </InputGroup>
          <Button
            whileTap={{ scale: 0.97 }}
            type="submit"
            whileHover={{ scale: 1.01 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </Form>
        <ToggleText>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </ToggleText>
      </GlassCard>
    </Container>
  );
}

export default App; 