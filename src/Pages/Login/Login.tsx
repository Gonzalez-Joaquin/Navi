import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Button, FormInput } from '../../Components'
import logo from '../../Assets/ina.png'
import styles from './Login.module.css'

const Login = () => {
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password.length > 26) {
      setPasswordError('La contraseña debe tener menos de 6 caracteres.')
      return
    } else {
      setPasswordError(null)
    }

    setLoading(!loading)
  }

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        navigate('/dashboard')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [loading])

  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles['form-container']}>
          <form onSubmit={onSubmit}>
            <h3>Iniciar sesión</h3>
            <div className={styles['form-field']}>
              <FormInput
                type="email"
                name="login-email"
                label="Correo"
                value={email}
                onChange={e => setEmail(e.target.value)}
                icon={
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                      fill="#ABA7AF"
                    />
                  </svg>
                }
              />
            </div>
            <div className={styles['form-field']}>
              <FormInput
                type="password"
                name="login-password"
                label="Contraseña"
                value={password}
                error={passwordError}
                onChange={e => setPassword(e.target.value)}
                limit={26}
                icon={
                  <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.0381 5.71972C17.0798 5.79083 17.107 5.86948 17.1182 5.95114C17.1293 6.03281 17.1242 6.11587 17.1032 6.19556C17.0821 6.27525 17.0455 6.34998 16.9954 6.41546C16.9454 6.48093 16.8828 6.53586 16.8114 6.57707C16.7401 6.61829 16.6612 6.64497 16.5795 6.6556C16.4978 6.66622 16.4147 6.66057 16.3352 6.63898C16.2556 6.61738 16.1812 6.58026 16.116 6.52976C16.0509 6.47926 15.9964 6.41637 15.9556 6.34472L14.5195 3.8573C13.6734 4.42397 12.7429 4.85319 11.7626 5.12902L12.2168 7.70441C12.2455 7.86766 12.2083 8.03564 12.1132 8.17142C12.0181 8.3072 11.873 8.39966 11.7098 8.42847C11.6737 8.43479 11.6371 8.43798 11.6005 8.438C11.4537 8.43778 11.3116 8.38593 11.1992 8.29151C11.0868 8.1971 11.0112 8.06614 10.9857 7.92159L10.539 5.38816C9.51607 5.53758 8.47686 5.53721 7.45406 5.38706L7.00734 7.92042C6.98184 8.06502 6.90626 8.19602 6.79386 8.29048C6.68146 8.38495 6.5394 8.43684 6.39257 8.43706C6.35596 8.43704 6.31942 8.43386 6.28335 8.42753C6.1201 8.39874 5.97498 8.30629 5.87989 8.1705C5.78481 8.03472 5.74755 7.86672 5.77632 7.70347L6.23054 5.12706C5.25141 4.85078 4.32211 4.42147 3.47703 3.85503L2.03249 6.35706C1.99202 6.42921 1.93762 6.4926 1.87245 6.54356C1.80729 6.59452 1.73266 6.63204 1.65288 6.65394C1.57311 6.67584 1.48978 6.68169 1.40773 6.67114C1.32568 6.66059 1.24654 6.63386 1.1749 6.59249C1.10326 6.55113 1.04055 6.49595 0.990393 6.43017C0.940239 6.36438 0.903644 6.28929 0.88273 6.20925C0.861816 6.12921 0.856999 6.04582 0.868559 5.96391C0.880119 5.88199 0.907825 5.80319 0.950072 5.73206L2.47328 3.09378C1.942 2.63655 1.45347 2.13189 1.01374 1.58605C0.961446 1.52228 0.922285 1.4488 0.898516 1.36983C0.874747 1.29087 0.866842 1.20797 0.875255 1.12594C0.883668 1.0439 0.908233 0.964339 0.947535 0.891839C0.986836 0.819339 1.0401 0.755334 1.10425 0.703512C1.1684 0.65169 1.24217 0.613076 1.32131 0.589896C1.40046 0.566715 1.48341 0.559427 1.56538 0.56845C1.64735 0.577473 1.72673 0.602629 1.79893 0.642469C1.87114 0.682309 1.93474 0.736045 1.98609 0.80058C2.47414 1.40791 3.03114 1.95646 3.64585 2.43519C3.65077 2.43863 3.65523 2.44253 3.65999 2.44613C5.18538 3.63288 7.06742 4.26862 8.99999 4.24995C10.9321 4.26858 12.8136 3.63313 14.3388 2.44691C14.343 2.44378 14.3468 2.44058 14.351 2.43753C14.9669 1.95825 15.5249 1.4089 16.0138 0.80058C16.1184 0.673037 16.2692 0.59202 16.4333 0.575192C16.5974 0.558364 16.7615 0.60709 16.8898 0.710746C17.0181 0.814402 17.1003 0.964583 17.1183 1.12855C17.1364 1.29251 17.0889 1.45696 16.9862 1.58605C16.5456 2.13295 16.056 2.63851 15.5235 3.09644L17.0381 5.71972Z"
                      fill="#ABA7AF"
                    />
                  </svg>
                }
              />
            </div>
            <div className={styles['form-footer']}>
              <Button loading={loading} value={loading ? 'Ingresando' : 'Ingresar'} type="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} loading="lazy" alt="ina - logotipo" draggable={false} />
        </div>

        <div className={styles['text-content']}>
          <h3>
            El sitio está <span>en construcción</span>, síganos en nuestras redes para más información!
          </h3>
          <p>Pronto estaremos conectados</p>
        </div>
      </div>
    </section>
  )
}

export default Login
