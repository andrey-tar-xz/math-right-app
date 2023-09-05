import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Logo({ width, height }) {
  const color = 'white'
  return (
    <Svg width={width} height={height} viewBox="0 0 580 295" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M124.371 120.807L98.8973 35.1295H98.2604C98.4727 37.249 98.685 40.3221 98.8973 44.3491C99.1096 48.27 99.3219 52.5089 99.5341 57.0656C99.7464 61.5164 99.8526 65.7023 99.8526 69.6233V120.807H75.6523V7.31203H112.271L137.586 91.2414H138.223L164.333 7.31203H200.793V120.807H175.637V68.9874C175.637 65.3844 175.691 61.4105 175.797 57.0656C176.009 52.6148 176.168 48.429 176.274 44.508C176.487 40.4811 176.646 37.4079 176.752 35.2885H176.115L149.845 120.807H124.371Z" fill={color} />
      <Path d="M268.793 31.7914C280.15 31.7914 288.959 34.4407 295.222 39.7393C301.484 44.9319 304.615 52.6678 304.615 62.947V120.807H285.988L280.734 109.045H280.097C277.655 112.118 275.108 114.661 272.454 116.675C269.907 118.688 266.935 120.119 263.539 120.966C260.248 121.92 256.162 122.397 251.279 122.397C246.185 122.397 241.567 121.39 237.428 119.377C233.395 117.363 230.21 114.29 227.875 110.157C225.54 106.024 224.372 100.779 224.372 94.4206C224.372 85.0951 227.61 78.2069 234.084 73.7561C240.665 69.3053 250.271 66.815 262.902 66.2852L277.868 65.8083V63.265C277.868 59.0261 276.753 55.9529 274.524 54.0454C272.401 52.138 269.429 51.1842 265.608 51.1842C261.787 51.1842 257.807 51.82 253.667 53.0917C249.528 54.2574 245.335 55.741 241.09 57.5425L232.97 39.7393C237.746 37.196 243.16 35.2355 249.21 33.8579C255.26 32.4803 261.787 31.7914 268.793 31.7914ZM269.748 81.3861C263.061 81.598 258.391 82.8167 255.737 85.0421C253.084 87.1615 251.757 90.0757 251.757 93.7847C251.757 97.0699 252.712 99.4542 254.623 100.938C256.533 102.421 258.975 103.163 261.947 103.163C266.404 103.163 270.172 101.839 273.251 99.1893C276.329 96.434 277.868 92.725 277.868 88.0623V81.0682L269.748 81.3861Z" fill={color} />
      <Path d="M370.892 101.097C373.652 101.097 376.199 100.832 378.534 100.302C380.87 99.7721 383.258 99.0833 385.699 98.2355V117.946C382.833 119.218 379.543 120.278 375.828 121.125C372.113 121.973 367.708 122.397 362.613 122.397C357.2 122.397 352.371 121.549 348.125 119.854C343.985 118.052 340.695 115.032 338.254 110.793C335.919 106.448 334.751 100.461 334.751 92.831V53.5686H323.606V42.4416L336.98 33.8579L344.304 15.4188H361.499V33.54H384.744V53.5686H361.499V91.8773C361.499 94.9504 362.348 97.2818 364.046 98.8714C365.744 100.355 368.026 101.097 370.892 101.097Z" fill={color} />
      <Path d="M433.19 21.1413C433.19 26.4399 433.031 31.2086 432.712 35.4475C432.394 39.5803 432.129 42.6005 431.916 44.508H433.349C435.26 41.4348 437.436 38.9975 439.877 37.196C442.318 35.3945 445.078 34.0698 448.156 33.2221C451.234 32.3743 454.525 31.9504 458.027 31.9504C464.077 31.9504 469.437 33.0631 474.108 35.2885C478.778 37.5139 482.44 40.958 485.093 45.6207C487.853 50.2835 489.233 56.3768 489.233 63.9008V120.807H462.326V71.3718C462.326 65.2254 461.318 60.6687 459.301 57.7015C457.39 54.6283 454.259 53.0917 449.907 53.0917C445.662 53.0917 442.318 54.2044 439.877 56.4298C437.436 58.5492 435.684 61.6754 434.623 65.8083C433.668 69.9412 433.19 75.0278 433.19 81.0682V120.807H406.283V0H433.19V21.1413Z" fill={color} />
      <Path d="M110.679 142.544C120.975 142.544 129.466 143.816 136.153 146.359C142.946 148.797 148.041 152.559 151.437 157.645C154.834 162.626 156.532 168.878 156.532 176.402C156.532 181.277 155.63 185.622 153.825 189.437C152.021 193.252 149.58 196.59 146.502 199.451C143.53 202.312 140.08 204.697 136.153 206.604L169.428 256.04H139.019L113.386 213.439H102.718V256.04H75.6523V142.544H110.679ZM109.564 163.845H102.718V192.298H109.564C113.916 192.298 117.525 191.821 120.391 190.867C123.257 189.808 125.38 188.165 126.759 185.94C128.245 183.608 128.988 180.747 128.988 177.356C128.988 174.283 128.298 171.792 126.919 169.885C125.539 167.871 123.416 166.388 120.55 165.434C117.684 164.374 114.022 163.845 109.564 163.845Z" fill={color} />
      <Path d="M210.978 168.772V256.04H184.23V168.772H210.978ZM197.763 134.12C201.584 134.12 204.927 134.967 207.793 136.663C210.659 138.358 212.092 141.644 212.092 146.518C212.092 151.287 210.659 154.572 207.793 156.374C204.927 158.069 201.584 158.917 197.763 158.917C193.73 158.917 190.28 158.069 187.414 156.374C184.654 154.572 183.275 151.287 183.275 146.518C183.275 141.644 184.654 138.358 187.414 136.663C190.28 134.967 193.73 134.12 197.763 134.12Z" fill={color} />
      <Path d="M266.296 167.183C272.028 167.183 276.91 168.295 280.944 170.521C284.977 172.746 288.321 175.819 290.974 179.74H291.611L293.681 168.772H316.607V256.199C316.607 264.464 314.962 271.406 311.672 277.022C308.381 282.639 303.393 286.877 296.706 289.739C290.019 292.706 281.634 294.189 271.55 294.189C264.969 294.189 258.972 293.819 253.559 293.077C248.252 292.335 243.104 291.01 238.116 289.103V267.326C241.725 268.809 245.227 270.028 248.624 270.982C252.126 272.041 255.735 272.783 259.45 273.207C263.271 273.737 267.305 274.002 271.55 274.002C277.706 274.002 282.27 272.571 285.242 269.71C288.321 266.955 289.86 262.822 289.86 257.311V255.563C289.86 253.973 289.913 252.225 290.019 250.317C290.231 248.41 290.443 246.555 290.656 244.754H289.86C287.312 248.887 284.075 252.066 280.148 254.291C276.22 256.517 271.444 257.629 265.819 257.629C255.947 257.629 248.093 253.708 242.255 245.866C236.524 238.025 233.658 226.898 233.658 212.485C233.658 202.736 234.985 194.523 237.638 187.847C240.292 181.065 244.06 175.925 248.942 172.428C253.931 168.931 259.715 167.183 266.296 167.183ZM275.69 188.324C272.399 188.324 269.64 189.278 267.411 191.185C265.182 192.987 263.537 195.689 262.475 199.292C261.414 202.895 260.883 207.452 260.883 212.962C260.883 221.122 262.104 227.162 264.545 231.083C266.986 234.898 270.807 236.806 276.008 236.806C278.874 236.806 281.262 236.435 283.173 235.693C285.189 234.845 286.781 233.574 287.949 231.878C289.223 230.077 290.178 227.851 290.815 225.202C291.452 222.553 291.77 219.374 291.77 215.665V212.326C291.77 206.922 291.239 202.471 290.178 198.974C289.117 195.371 287.418 192.722 285.083 191.026C282.748 189.225 279.617 188.324 275.69 188.324Z" fill={color} />
      <Path d="M370.532 156.374C370.532 161.672 370.372 166.441 370.054 170.68C369.736 174.813 369.47 177.833 369.258 179.74H370.691C372.601 176.667 374.777 174.23 377.218 172.428C379.66 170.627 382.419 169.302 385.497 168.454C388.576 167.607 391.866 167.183 395.369 167.183C401.419 167.183 406.779 168.295 411.449 170.521C416.119 172.746 419.781 176.19 422.435 180.853C425.194 185.516 426.574 191.609 426.574 199.133V256.04H399.667V206.604C399.667 200.458 398.659 195.901 396.642 192.934C394.732 189.861 391.601 188.324 387.249 188.324C383.003 188.324 379.66 189.437 377.218 191.662C374.777 193.781 373.026 196.908 371.964 201.041C371.009 205.173 370.532 210.26 370.532 216.3V256.04H343.625V135.232H370.532V156.374Z" fill={color} />
      <Path d="M492.82 236.329C495.58 236.329 498.127 236.064 500.462 235.534C502.797 235.004 505.185 234.316 507.627 233.468V253.178C504.761 254.45 501.471 255.51 497.756 256.358C494.041 257.205 489.636 257.629 484.541 257.629C479.128 257.629 474.298 256.782 470.053 255.086C465.913 253.284 462.623 250.264 460.182 246.025C457.846 241.681 456.679 235.693 456.679 228.063V188.801H445.534V177.674L458.908 169.09L466.232 150.651H483.427V168.772H506.671V188.801H483.427V227.109C483.427 230.183 484.276 232.514 485.974 234.104C487.672 235.587 489.954 236.329 492.82 236.329Z" fill={color} />
      <Path d="M62.178 220.379C50.7757 220.379 42.0459 219.428 35.9884 217.525C29.931 215.622 25.7739 212.649 23.5172 208.606C21.2605 204.681 20.1321 199.627 20.1321 193.443V168.647C20.1321 164.961 19.1226 161.988 17.1034 159.728C15.203 157.469 12.7088 155.863 9.62067 154.912C6.53255 153.96 3.32566 153.485 0 153.485V130.116C3.56321 130.116 6.82948 129.64 9.79883 128.689C12.7682 127.738 15.203 126.132 17.1034 123.873C19.1226 121.494 20.1321 118.521 20.1321 114.953V89.8012C20.1321 85.1632 20.6666 81.1793 21.7356 77.8494C22.9233 74.4006 25.0019 71.6059 27.9712 69.4653C31.0593 67.3247 35.3352 65.7192 40.7987 64.6489C46.2623 63.5786 53.3887 63.0435 62.178 63.0435V84.8064C59.8025 84.8064 57.4271 85.1037 55.0516 85.6983C52.6761 86.293 50.657 87.3633 48.9941 88.9093C47.3313 90.3364 46.4999 92.6554 46.4999 95.8663V120.662C46.4999 126.965 44.7777 131.722 41.3332 134.933C38.0076 138.144 33.1972 140.225 26.9022 141.176V142.246C33.316 143.198 38.1857 145.279 41.5114 148.49C44.8371 151.701 46.4999 156.398 46.4999 162.582V187.556C46.4999 190.767 47.3313 193.086 48.9941 194.513C50.7757 196.059 52.8543 197.07 55.2298 197.546C57.6052 198.14 59.9213 198.497 62.178 198.616V220.379Z" fill={color} />
      <Path d="M517.822 198.616C520.197 198.497 522.573 198.14 524.948 197.546C527.324 197.07 529.343 196.059 531.006 194.513C532.669 193.086 533.5 190.767 533.5 187.556V162.582C533.5 156.398 535.163 151.701 538.489 148.49C541.814 145.279 546.625 143.198 552.92 142.246V141.176C546.862 140.225 542.111 138.144 538.667 134.933C535.222 131.722 533.5 126.965 533.5 120.662V95.8663C533.5 92.6554 532.669 90.3364 531.006 88.9093C529.343 87.3633 527.324 86.293 524.948 85.6983C522.573 85.1037 520.197 84.8064 517.822 84.8064V63.0435C526.611 63.0435 533.738 63.5786 539.201 64.6489C544.665 65.7192 548.881 67.3247 551.851 69.4653C554.82 71.6059 556.899 74.4006 558.086 77.8494C559.274 81.1793 559.868 85.1632 559.868 89.8012V114.953C559.868 118.521 560.759 121.494 562.54 123.873C564.441 126.132 566.935 127.738 570.023 128.689C573.23 129.64 576.556 130.116 580 130.116V153.485C576.674 153.485 573.408 153.96 570.201 154.912C567.113 155.863 564.619 157.469 562.718 159.728C560.818 161.988 559.868 164.961 559.868 168.647V193.443C559.868 199.627 558.739 204.681 556.483 208.606C554.226 212.649 550.069 215.622 544.012 217.525C538.073 219.428 529.343 220.379 517.822 220.379V198.616Z" fill={color} />
    </Svg>
  );
}