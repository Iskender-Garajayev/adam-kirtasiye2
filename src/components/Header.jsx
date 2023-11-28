import React from 'react';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-inner'>
        <div className='logo'>
          ADA'M
          <span className='compass'>
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 101.000000 227.000000'
              preserveAspectRatio='xMidYMid meet'>
              {' '}
              <g
                transform='translate(0.000000,227.000000) scale(0.100000,-0.100000)'
                fill='#000000'
                stroke='none'>
                {' '}
                <path d='M460 1873 c0 -76 3 -93 15 -93 26 0 16 -28 -12 -38 -16 -5 -43 -24 -60 -42 -55 -56 -57 -145 -5 -209 l29 -36 -55 -162 -55 -163 -48 0 c-27 0 -49 5 -49 10 0 6 -16 10 -35 10 -32 0 -35 -2 -35 -30 0 -28 3 -30 35 -30 21 0 35 5 35 13 0 8 16 12 45 12 27 0 44 -4 42 -10 -2 -5 -46 -135 -98 -288 -69 -204 -97 -276 -107 -272 -7 3 -22 0 -33 -6 -28 -14 -22 -61 10 -74 21 -9 23 -14 18 -67 -3 -32 -1 -58 3 -58 5 0 10 -10 13 -22 5 -29 0 -40 88 217 39 116 100 293 136 395 l65 186 46 -2 c45 -2 47 -3 50 -33 4 -43 32 -42 32 2 0 32 0 32 48 32 l48 0 83 -240 c45 -132 108 -315 139 -407 51 -151 58 -165 69 -145 7 12 12 48 13 80 0 43 4 57 15 57 8 0 19 8 24 18 14 27 -9 67 -38 67 -21 0 -30 22 -113 265 -50 146 -92 274 -95 286 -4 18 0 20 36 20 26 -1 41 -6 41 -13 0 -8 14 -13 35 -13 32 0 35 2 35 30 0 28 -3 30 -35 30 -19 0 -35 -5 -35 -11 0 -6 -19 -9 -46 -7 l-46 3 -53 157 -53 157 33 36 c57 60 59 147 4 210 -17 19 -46 40 -65 47 -37 13 -46 38 -14 38 19 0 20 7 20 93 l0 94 -60 0 -60 0 0 -94z m78 -10 c-2 -44 -7 -58 -18 -58 -11 0 -16 13 -18 44 -4 52 2 71 23 71 13 0 15 -10 13 -57z m-48 -268 l0 -116 -31 16 c-38 20 -63 76 -54 121 5 27 62 94 80 94 3 0 5 -52 5 -115z m103 81 c50 -46 48 -127 -4 -170 -17 -14 -35 -26 -40 -26 -5 0 -9 49 -9 110 0 121 6 130 53 86z m27 -543 c0 -2 -20 -3 -45 -3 -45 0 -45 0 -45 35 0 24 -5 35 -15 35 -10 0 -15 -11 -15 -35 0 -35 0 -35 -45 -35 -25 0 -45 4 -45 8 0 5 15 51 34 103 18 52 41 118 51 148 l18 55 53 -155 c29 -85 54 -155 54 -156z m-474 -628 c-7 -19 -16 -38 -21 -42 -4 -5 -5 -2 0 6 4 8 2 16 -5 21 -7 4 -9 13 -6 19 4 6 11 9 16 6 4 -3 10 2 14 10 11 31 13 14 2 -20z m762 2 c9 -7 9 -13 1 -23 -10 -12 -14 -11 -25 3 -28 38 -15 50 24 20z' />{' '}
              </g>{' '}
            </svg>
          </span>
          KIRTASIYE
        </div>
        <div className='navbar'>
          <span className='svg'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path d='M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z' />
            </svg>
          </span>
          <span>+90 541 224 08 41</span>
        </div>
      </div>
    </div>
  );
};

export default Header;