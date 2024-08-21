import Button from '../Button/Button'
import styles from './Empty.module.css'

interface Props {
  label?: string
  button?: {
    action: () => void
  }
}

const Empty = ({ label, button }: Props) => {
  return (
    <div className={styles.container}>
      <svg width="113" height="113" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.5"
          d="M29.6607 100.257C48.5933 100.257 61.5946 109 70.7174 109C79.8402 109 99 104.325 99 66.9087C99 29.4929 73.2246 24 63.1903 24C16.2023 24 -3.86894 100.257 29.6607 100.257Z"
          fill="#F5F3F7"
        />
        <path
          d="M102.856 59.7396C102.756 58.5596 101.997 57.5906 100.875 57.2106L91.7711 54.1278L100.634 43.96C101.222 43.2851 101.468 42.3925 101.309 41.5115C101.15 40.6305 100.607 39.8805 99.8198 39.454L88.386 33.2591C87.6389 32.8545 86.7058 33.1318 86.3008 33.8787C85.8962 34.6256 86.1736 35.5591 86.9203 35.9637L98.197 42.0734L88.7525 52.9088L58.9215 36.7459L64.4568 30.3956C65.0937 30.6294 65.7816 30.757 66.4985 30.757C68.7247 30.757 70.6678 29.5259 71.6856 27.7095L80.2331 32.3406C80.4661 32.4667 80.7169 32.5266 80.9644 32.5266C81.5107 32.5266 82.0396 32.235 82.3183 31.7208C82.723 30.9739 82.4455 30.0404 81.6986 29.6358L72.4364 24.6177C72.332 21.4318 69.7097 18.8718 66.4987 18.8718C63.222 18.8718 60.5561 21.5376 60.5561 24.8144C60.5561 26.2571 61.0734 27.5809 61.9314 28.6114L56.5001 34.8426L46.8776 23.8033C45.9691 22.7609 44.4857 22.4929 43.2694 23.1516L39.508 25.1895C39.0673 21.7041 36.0861 18.9992 32.483 18.9992C28.5775 18.9992 25.4 22.1766 25.4 26.0824C25.4 28.2419 26.3727 30.1776 27.9016 31.4778L13.1802 39.454C12.3931 39.8805 11.8504 40.6303 11.6911 41.5115C11.5321 42.3925 11.7782 43.2851 12.3666 43.9598L21.2289 54.1276L12.1256 57.2101C11.0036 57.5902 10.2442 58.5592 10.1437 59.7392C10.0433 60.9192 10.6277 62.0028 11.6691 62.567L22.3593 68.3589V81.7575C22.3593 82.607 23.0477 80.2194 23.8974 80.2194C24.747 80.2194 25.4355 83.3497 25.4355 82.5002V70.0256L40.3915 78.1286C41.0295 78.4744 41.7413 78.6502 42.4558 78.6502C42.923 78.6502 43.3916 78.5749 43.8412 78.4227L54.9622 74.6573V105.26L26.0909 89.6166C25.6867 89.3976 25.4357 88.9759 25.4357 88.5161V81.7575C25.4357 80.9081 24.747 80.2194 23.8974 80.2194C23.0477 80.2194 22.3593 80.9081 22.3593 81.7575L22.3595 88.5161C22.3595 90.1059 23.2276 91.5638 24.6254 92.3212L54.4386 108.475C55.0842 108.825 55.7924 108.999 56.5005 108.999C57.2086 108.999 57.9168 108.824 58.5624 108.475L88.3756 92.3212C89.7732 91.5638 90.6415 90.1059 90.6415 88.5161V68.3587L101.331 62.5668C102.372 62.0033 102.957 60.9198 102.856 59.7396ZM59.9003 47.8405C65.2845 49.354 69.0448 54.3189 69.0448 59.9145C69.0448 61.4727 68.7649 62.985 68.2116 64.4179L56.5001 70.7632L44.7886 64.4179C44.2355 62.985 43.9554 61.4727 43.9554 59.9145C43.9554 54.3017 47.7301 49.3324 53.1351 47.8302C53.9534 47.6028 54.4325 46.7548 54.205 45.9365C53.9778 45.1181 53.1294 44.6392 52.3113 44.8664C45.5804 46.7374 40.8794 52.9252 40.8794 59.9145C40.8794 60.7574 40.9477 61.5894 41.0789 62.4081L27.1262 54.8482L56.5005 38.9329L85.8746 54.8485L71.9218 62.4083C72.0531 61.5896 72.1214 60.7576 72.1214 59.9147C72.1214 52.9468 67.4384 46.764 60.7331 44.8791C59.9153 44.649 59.066 45.1261 58.8363 45.9435C58.6058 46.7614 59.0822 47.6106 59.9003 47.8405ZM66.4985 21.9484C68.0791 21.9484 69.3651 23.2342 69.3651 24.8148C69.3651 26.3953 68.0791 27.6814 66.4985 27.6814C64.918 27.6814 63.6321 26.3953 63.6321 24.8148C63.6321 23.2342 64.918 21.9484 66.4985 21.9484ZM32.483 22.0758C34.6924 22.0758 36.4901 23.8733 36.4901 26.0828C36.4901 28.2921 34.6924 30.0898 32.483 30.0898C30.2737 30.0898 28.4762 28.2923 28.4762 26.0828C28.4762 23.8733 30.2737 22.0758 32.483 22.0758ZM31.3978 33.0828C31.7517 33.1375 32.1141 33.166 32.483 33.166C35.3496 33.166 37.8219 31.4534 38.9357 28.9986L44.634 25.9113L54.0783 36.7463L24.2473 52.9092L14.8027 42.0739L31.3978 33.0828ZM42.8543 75.5096C42.5254 75.6211 42.1616 75.5898 41.8568 75.4245L24.6369 66.0948C24.6324 66.0923 24.6277 66.0899 24.6232 66.0874L13.423 60.0191L23.7545 56.5207L52.6686 72.1867L42.8543 75.5096ZM87.5647 88.5167C87.5647 88.9765 87.3135 89.3982 86.9095 89.6172L58.0382 105.26V74.6579L69.1592 78.4233C69.6088 78.5755 70.0774 78.6508 70.5447 78.6508C71.2588 78.6508 71.9709 78.4748 72.6089 78.1293L87.5649 70.0262L87.5647 88.5167ZM71.1432 75.4245C70.8384 75.5898 70.4746 75.6211 70.1457 75.5096L60.3316 72.1867L89.2457 56.5207L99.5772 60.0191L71.1432 75.4245Z"
          fill="#ABA7AF"
        />
        <path
          d="M68.0028 91.0937L64.4744 93.0055C63.7275 93.4101 63.4503 94.3436 63.8549 95.0905C64.1334 95.6044 64.6625 95.8962 65.2088 95.8962C65.4561 95.8962 65.7074 95.8364 65.9401 95.7102L69.4685 93.7985C70.2154 93.3939 70.4927 92.4604 70.088 91.7135C69.6834 90.9666 68.7503 90.6889 68.0028 91.0937Z"
          fill="#ABA7AF"
        />
        <path
          d="M38.3904 16.9525C38.6908 17.2528 39.0846 17.4031 39.4781 17.4031C39.8716 17.4031 40.2654 17.253 40.5658 16.9525L41.8347 15.6837L43.1035 16.9525C43.4039 17.2528 43.7977 17.4031 44.1912 17.4031C44.5848 17.4031 44.9785 17.253 45.2789 16.9525C45.8796 16.3519 45.8796 15.3779 45.2789 14.7775L44.0099 13.5084L45.2789 12.2394C45.8796 11.6388 45.8796 10.6648 45.2789 10.0644C44.6781 9.46369 43.7044 9.46369 43.1037 10.0644L41.8349 11.3332L40.566 10.0644C39.9652 9.46369 38.9914 9.46369 38.3908 10.0644C37.7901 10.665 37.7901 11.639 38.3908 12.2394L39.6598 13.5084L38.3908 14.7775C37.7897 15.3779 37.7897 16.3519 38.3904 16.9525Z"
          fill="#ABA7AF"
        />
        <path
          d="M83.9264 27.0282C84.2268 27.3284 84.6206 27.4787 85.0141 27.4787C85.4077 27.4787 85.8014 27.3286 86.1019 27.0282L87.3707 25.7594L88.6395 27.0282C88.94 27.3284 89.3337 27.4787 89.7273 27.4787C90.1208 27.4787 90.5145 27.3286 90.815 27.0282C91.4157 26.4275 91.4157 25.4536 90.815 24.8531L89.546 23.5841L90.815 22.3151C91.4157 21.7144 91.4157 20.7405 90.815 20.14C90.2141 19.5393 89.2404 19.5393 88.6397 20.14L87.3709 21.4088L86.1021 20.14C85.5012 19.5393 84.5275 19.5393 83.9268 20.14C83.3261 20.7407 83.3261 21.7146 83.9268 22.3151L85.1958 23.5841L83.9268 24.8531C83.3257 25.4536 83.3257 26.4275 83.9264 27.0282Z"
          fill="#ABA7AF"
        />
        <path
          d="M75.4349 17.4021C79.13 17.4021 82.136 14.396 82.136 10.7011C82.1358 7.00603 79.1298 4 75.4349 4C71.74 4 68.7337 7.00603 68.7337 10.7011C68.7337 14.396 71.7398 17.4021 75.4349 17.4021ZM75.4349 7.07617C77.4336 7.07617 79.0598 8.70224 79.0598 10.7011C79.0598 12.6998 77.4336 14.3259 75.4349 14.3259C73.4362 14.3259 71.8099 12.6998 71.8099 10.7011C71.8099 8.70224 73.4362 7.07617 75.4349 7.07617Z"
          fill="#ABA7AF"
        />
        <path
          d="M56.3264 61.5278C54.8445 61.5278 53.4459 62.0192 52.386 62.9129C51.7367 63.4605 51.6541 64.4309 52.2019 65.0802C52.7492 65.7297 53.7196 65.8121 54.3691 65.2645C54.8675 64.8443 55.5803 64.6038 56.3266 64.6038H56.3368C57.0868 64.606 57.8023 64.8511 58.3005 65.2762C58.5902 65.5236 58.9452 65.6443 59.2982 65.6443C59.7327 65.6443 60.1646 65.4612 60.4688 65.1048C61.0202 64.4588 60.9435 63.4877 60.2975 62.9363C59.2385 62.0323 57.8349 61.5319 56.3457 61.5274C56.3393 61.5278 56.3327 61.5278 56.3264 61.5278Z"
          fill="#ABA7AF"
        />
        <path
          d="M49.819 56.9728H49.8047C48.9544 56.9603 48.2692 57.651 48.2631 58.5002C48.2574 59.3497 48.9483 60.043 49.7977 60.049H49.8086C50.6529 60.049 51.3405 59.3673 51.3464 58.5216C51.3524 57.6721 50.6687 56.9788 49.819 56.9728Z"
          fill="#ABA7AF"
        />
        <path
          d="M62.8945 60.0173C62.8998 60.0183 62.9054 60.0189 62.9107 60.0199C62.955 60.0286 62.9999 60.0357 63.0454 60.0405C63.0602 60.0419 63.0752 60.0419 63.0899 60.0429C63.1242 60.0454 63.1584 60.0487 63.1935 60.0489H63.2044C63.2573 60.0489 63.3096 60.0462 63.3612 60.0409C64.1379 59.9631 64.7441 59.3077 64.7441 58.5106C64.7441 57.7239 64.1533 57.0765 63.3914 56.9848C63.3844 56.984 63.3777 56.9823 63.3707 56.9817C63.3356 56.978 63.2997 56.977 63.2638 56.9756C63.2474 56.9749 63.2314 56.9729 63.2148 56.9727H63.2068C63.2066 56.9727 63.2062 56.9727 63.206 56.9727H63.2005H63.1914C63.1908 56.9727 63.1902 56.9727 63.1896 56.9727C62.3453 56.9727 61.6648 57.6544 61.6589 58.5001C61.6538 59.2472 62.1878 59.8731 62.8945 60.0173Z"
          fill="#ABA7AF"
        />
      </svg>
      {label && <span>No se encontraron {label}, pruebe creando el primero</span>}
      {label && button ? (
        <Button
          className={styles.button}
          icon={
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.16667 0H11.8333C12.0101 0 12.1797 0.0702379 12.3047 0.195262C12.4298 0.320286 12.5 0.489856 12.5 0.666667V11.3333C12.5 11.5101 12.4298 11.6797 12.3047 11.8047C12.1797 11.9298 12.0101 12 11.8333 12H1.16667C0.989856 12 0.820286 11.9298 0.695262 11.8047C0.570238 11.6797 0.5 11.5101 0.5 11.3333V0.666667C0.5 0.489856 0.570238 0.320286 0.695262 0.195262C0.820286 0.0702379 0.989856 0 1.16667 0ZM5.83333 5.33333H3.16667V6.66667H5.83333V9.33333H7.16667V6.66667H9.83333V5.33333H7.16667V2.66667H5.83333V5.33333Z"
                fill="white"
              />
            </svg>
          }
          value={`Crear un ${label ? (label.endsWith('s') ? label.slice(0, -1) : label) : 'label'}`}
          onClick={button.action}
        />
      ) : null}
    </div>
  )
}

export default Empty
