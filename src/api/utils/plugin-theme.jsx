import { signal, effect } from '@preact/signals'
const theme = signal(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

const light_svg = <><svg viewBox='0 0 24 24' ><g stroke-width='0'></g><g stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M12 2V3' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M12 21V22' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M22 12L21 12' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M3 12L2 12' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M19.0708 4.92969L18.678 5.32252' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M5.32178 18.6777L4.92894 19.0706' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M19.0708 19.0703L18.678 18.6775' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M5.32178 5.32227L4.92894 4.92943' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> <path d='M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round'></path> </g></svg></>
const dark_svg = <><svg viewBox='0 0 24 24'  ><g stroke-width='0'></g><g stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M12.09 20.66C11.7256 20.6595 11.3615 20.6362 11 20.59C9.07483 20.3393 7.28659 19.459 5.91379 18.0862C4.54099 16.7134 3.6607 14.9252 3.41 13C3.12047 10.8241 3.66318 8.61913 4.92954 6.82619C6.1959 5.03326 8.09254 3.78459 10.24 3.32997C10.4754 3.27651 10.7214 3.29352 10.9472 3.37887C11.1731 3.46423 11.3688 3.61416 11.51 3.80997C11.6547 4.01271 11.7366 4.25353 11.7455 4.50246C11.7544 4.75138 11.6899 4.99743 11.56 5.20997C10.9497 6.25715 10.7168 7.48187 10.9 8.67997C11.0698 9.78078 11.5859 10.7989 12.3735 11.5865C13.1611 12.374 14.1792 12.8902 15.28 13.06C16.4794 13.2495 17.7073 13.0124 18.75 12.39C18.9645 12.263 19.2116 12.2019 19.4605 12.2143C19.7095 12.2268 19.9493 12.3122 20.15 12.46C20.346 12.5987 20.4963 12.7925 20.5818 13.0169C20.6672 13.2413 20.684 13.486 20.63 13.72C20.2244 15.6837 19.1528 17.4471 17.5966 18.7117C16.0405 19.9763 14.0952 20.6646 12.09 20.66ZM10 4.99997C8.79316 5.35463 7.69936 6.01718 6.82607 6.92252C5.95279 7.82785 5.33009 8.94482 5.01914 10.1637C4.7082 11.3825 4.71972 12.6613 5.05258 13.8743C5.38543 15.0873 6.02817 16.1929 6.91762 17.0824C7.80707 17.9718 8.91264 18.6145 10.1257 18.9474C11.3387 19.2803 12.6175 19.2918 13.8363 18.9808C15.0552 18.6699 16.1721 18.0472 17.0775 17.1739C17.9828 16.3006 18.6453 15.2068 19 14C18.0533 14.4615 17.0115 14.6948 15.9583 14.681C14.9052 14.6673 13.8699 14.4069 12.9355 13.9207C12.0011 13.4346 11.1937 12.7362 10.578 11.8817C9.96227 11.0271 9.55539 10.0402 9.39 8.99997C9.17952 7.63563 9.39242 6.23956 10 4.99997Z' ></path> </g></svg></>;


const theme_svg = signal(theme.value === 'dark' ? dark_svg : light_svg);


effect(() => {
    theme_svg.value = signal(theme.value === 'dark' ? dark_svg : light_svg);
    localStorage.setItem('theme', theme.value);
    if (theme.value == 'dark') {
        document.body.classList.add('dark');

    } else {
        document.body.classList.remove('dark');
    }
});

export { theme, theme_svg }