// eslint-disable-next-line import/no-extraneous-dependencies
import {useNavigate} from 'react-router-dom'
import './IntroPage.css'

const IntroPage = () => {
  const navigate = useNavigate()

  const handleStartGame = () => {
    navigate('/game') // Adjust this path to match your actual game route
  }

  return (
    <div className="intro-container">
      <nav className="navbar">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/YAAAEiCAYAAABTKElEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAGfsSURBVHhe7Z0HuJXFtb9X7r0xKrbEEgFBFAuWoLEr2LBj7xU1ChgssaJJnpio0diNvWAXe0RNLFiw94YVMFGaYseKJcm993//ecc9uj05ZZevzMz+vc+zn334zgH2mW++tdZvrTUz3/u/f2FCCCGEEEIIIYSIkv+ovAshhBBCCCGEECJCJOyFEEIIIYQQQoiIkbAXQgghhBBCCCEiRsJeCCGEEEIIIYSIGAl7IYQQQgghhBAiYiTshRBCCCGEEEKIiJGwF0IIIYQQQgghIkbCXgghhBBCCCGEiBgJeyGEEEIIIYQQImIk7IUQQgghhBBCiIiRsBdCCCGEEEIIISJGwl4IIYQQQgghhIgYCXshhBBCCCGEECJiJOyFEEIIIYQQQoiIkbAXQgghhBBCCCEiRsJeCCGEEEIIIYSIGAl7IYQQQgghhBAiYiTshRBCCCGEEEKIiJGwF0IIIYQQQgghIkbCXgghhBBCCCGEiBgJeyGEEEIIIYQQImIk7IUQQgghhBBCiIiRsBdCCCGEEEIIISJGwl4IIYQQQgghhIgYCXshhBBCCCGEECJiJOyFEEIIIYQQQoiIkbAXQgghhBBCCCEiRsJeCCGEEEIIIYSIGAl7IYQQQgghhBAiYiTshRBCCCGEEEKIiJGwF0IIIYQQQgghIkbCXgghhBBCCCGEiBgJeyGEEEIIIYQQImIk7IUQQgghhBBCiIiRsBdCCCGEEEIIISJGwl4IIYQQQgghhIgYCXshhBBCCCGEECJiJOyFEEIIIYQQQoiIkbAXQgghhBBCCCEiRsJeCCGEEEIIIYSIGAl7IYQQQgghhBAiYiTshRBCCCGEEEKIiJGwF0IIIYQQQgghIuZ7//cvKl8LIYQQQgghhBC58r//+7/2xRdf2Mcff2wfffTRN69PPvnEvvzyS/uv//ovm2uuuWzuuee2eeaZx71Xf92tWzf3M+JbJOyFEEIIIYQQQtTN//t//8/+8Y9/2KeffuqEOUK9Wqz7r9u+f/bZZ/bPf/7TGpWi//mf/2lzzDFHu6K/1q958W+kkiCIRtiT1WEivPXWWzZr1qzKVZEFZLx69uxp888/v3tI6oUH+r//+7/dPeJrXv7rtu8dXevs+ve+9z37j//4D/fQ8eIz8mrv6+pr3//+9+0HP/iB+1oIUT88fzzbvP7nf/7n314dXe/q5f8ez3r117x41uecc85vsvRt33HIytK3HgSAb7zxhqvkiOyYffbZ7cc//rEttNBCzl+GDPYIEfDVV1+5Kh8VPf+q/nNn3yPO2XjjjW2ttdZytkSIRsAOjR071i666CJ76aWXKlezx/vD+eabz370ox998/rhD3/4na/b/hl/WaSPHD9+vJ1xxhl2zz33OH8eG+gExtnHGLxXf7344ovbuuuua8sss0zwdjIaYV/UQ9SK/OQnP7GDDjrIBg8e7CZ2LXA/7rrrLrvwwgujuh8YSQQ/r/aSAXzd3p95EQARFHTv3t29Fl54YevRo4d7ERTxfSFiBVdA8hQHja19+OGHnZBCeIcGzzHOtVr0t00AVH/d0TsvnyQggSjChDn46KOPusDxscceq1wVWUDAutdee9mOO+7ofFqzkJyjctdWUNf757bf44Wgb1Y0LLXUUjZs2DDbdtttnQgSolHwlaeddprde++9bt6HBD4NUdqrVy/bYIMNbKeddnJzPy+eeeYZO/nkk+3++++vXEkHtACJwMMPP9zWWWedytVwiUbYv/fee3bzzTfbFVdcYa+99lrlqsiC/v3728EHH2ybbbZZzeKUdhsv7F988cXK1daFRAEZ1Wqx7xMA/s9URRASGInQoTIyceJEu/HGG+2VV175JhnS3gsHUs/16ld7P9PZ35ttttmcqBPZwH3+8MMPnVO+8847nXiiKyq0ICVPmE/MKwR+R+J/gQUWcAnQ1Vdf3T3Holg+//xzGzdunJ133nn23HPPVa6KLFhiiSXsZz/7mW2//fYuQV0LJPZJ/N166602adKk74hvRD12JVRSFPbTp0+32267zZ566ik3/vjKaj/a9mteFHF4deRvO/v7/uuOrmFPY4hzmmXy5MlOk9x0001Oo4QI92HNNde0I444IjdRSrLtiSeecEmORx55pHI1HRZccEHbZpttnJ3s169f5Wq4RCPsqRxdc801dt1119mMGTMqV0UWrLjiinbooYfaJpts4gxyLdAWeffdd9sFF1xgL7zwQuWq6AyypxjWvffe29ZYY42auyPK4O9//7sL3M466yxnsEMCIVZLMNLV9Y5+tvqV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" // Replace with your logo URL
          alt="Logo"
          className="navbar-logo"
        />
      </nav>
      <div className="intro-content">
        <h1 className="intro-title">Welcome to the Frequency Game!</h1>
        <p className="intro-description">
          Test your memory and reflexes in this exciting game. Click the button
          below to start the fun!
        </p>
        <button
          type="button"
          className="start-button"
          onClick={handleStartGame}
        >
          Start Game
        </button>
      </div>
    </div>
  )
}

export default IntroPage
