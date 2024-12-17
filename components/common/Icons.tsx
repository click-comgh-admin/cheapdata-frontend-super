type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Dashboard: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8V6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 19C2 18.0681 2 17.6022 2.15224 17.2346C2.35523 16.7446 2.74458 16.3552 3.23463 16.1522C3.60218 16 4.06812 16 5 16H7C7.93188 16 8.39782 16 8.76537 16.1522C9.25542 16.3552 9.64477 16.7446 9.84776 17.2346C10 17.6022 10 18.0681 10 19C10 19.9319 10 20.3978 9.84776 20.7654C9.64477 21.2554 9.25542 21.6448 8.76537 21.8478C8.39782 22 7.93188 22 7 22H5C4.06812 22 3.60218 22 3.23463 21.8478C2.74458 21.6448 2.35523 21.2554 2.15224 20.7654C2 20.3978 2 19.9319 2 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 5C14 4.06812 14 3.60218 14.1522 3.23463C14.3552 2.74458 14.7446 2.35523 15.2346 2.15224C15.6022 2 16.0681 2 17 2H19C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5C22 5.93188 22 6.39782 21.8478 6.76537C21.6448 7.25542 21.2554 7.64477 20.7654 7.84776C20.3978 8 19.9319 8 19 8H17C16.0681 8 15.6022 8 15.2346 7.84776C14.7446 7.64477 14.3552 7.25542 14.1522 6.76537C14 6.39782 14 5.93188 14 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),

  Clients: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
    >
      <path
        d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
      <path
        d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),

  Admin: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5.49994 19.0001L6.06034 18.0194C6.95055 16.4616 8.60727 15.5001 10.4016 15.5001H13.5983C15.3926 15.5001 17.0493 16.4616 17.9395 18.0194L18.4999 19.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  SystemHealth: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M19.4626 3.99352C16.7809 2.3486 14.4404 3.01148 13.0344 4.06738C12.4578 4.50033 12.1696 4.7168 12 4.7168C11.8304 4.7168 11.5422 4.50033 10.9656 4.06738C9.55962 3.01148 7.21909 2.3486 4.53744 3.99352C1.01807 6.1523 0.221719 13.2742 8.33953 19.2827C9.88572 20.4272 10.6588 20.9994 12 20.9994C13.3412 20.9994 14.1143 20.4272 15.6605 19.2827C23.7783 13.2742 22.9819 6.1523 19.4626 3.99352Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 9V15M9 12L15 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  Subscription: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.004 5.999h16v2h-16zm2-3.999h12v2h-12zm13.993 7.991H5.003A2.01 2.01 0 0 0 3 12.004v7.974a2.01 2.01 0 0 0 2.003 2.013h15.994A2.01 2.01 0 0 0 23 19.978v-7.974a2.01 2.01 0 0 0-2.003-2.013M21 20H5v-8h16Z"
      />
      <path
        fill="currentColor"
        d="M12.004 18.991h2v-1.989h2v-2.004h-2v-2.007h-2v2.01h-2v2.001h2z"
      />
    </svg>
  ),

  ServiceModule: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.002 11.5h3.979V7h-3.979zm-4.985 0h3.98V7h-3.98zm-4.978 0h3.978V7H5.04zm0 5.5h3.978v-4.5H5.04zm4.978 0h3.98v-4.5h-3.98zm4.985 0h3.979v-4.5h-3.979zM4.039 18V6H19.98v12z"
      />
    </svg>
  ),

  PostMaster: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M2 19C2 19 3 19 4 21C4 21 7.17647 16 10 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V13C22 10.1716 22 8.75736 21.1213 7.87868C20.2426 7 18.8284 7 16 7H10M2 15V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 13.5C16 14.3284 16.6716 15 17.5 15C18.3284 15 19 14.3284 19 13.5C19 12.6716 18.3284 12 17.5 12C16.6716 12 16 12.6716 16 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),

  Commission: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M4 20L20 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.26777 4.73223C9.24408 5.70854 9.24408 7.29146 8.26777 8.26777C7.29146 9.24408 5.70854 9.24408 4.73223 8.26777C3.75592 7.29146 3.75592 5.70854 4.73223 4.73223C5.70854 3.75592 7.29146 3.75592 8.26777 4.73223Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19.2678 15.7322C20.2441 16.7085 20.2441 18.2915 19.2678 19.2678C18.2915 20.2441 16.7085 20.2441 15.7322 19.2678C14.7559 18.2915 14.7559 16.7085 15.7322 15.7322C16.7085 14.7559 18.2915 14.7559 19.2678 15.7322Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),

  DestktopDataSync: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M5.5 3.5L5.5 14.5C5.5 18.2133 8.18503 21 12 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 20.5L18.5 9.5C18.5 5.78672 15.815 3 12 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 18C21 18 19.1588 20.5 18.5 20.5C17.8412 20.5 16 18 16 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.50022C8 5.50022 6.15878 3.00025 5.49998 3.00024C4.84118 3.00024 3 5.50024 3 5.50024"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Notification: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Eye: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-eye"
      {...props}
    >
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),

  EyeOff: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-eye-off"
      {...props}
    >
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </svg>
  ),

  Lock: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
    </svg>
  ),

  ArrowDown: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_16517_6200)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7073 15.7069C12.5198 15.8943 12.2655 15.9996 12.0003 15.9996C11.7352 15.9996 11.4809 15.8943 11.2933 15.7069L5.63634 10.0499C5.54083 9.95761 5.46465 9.84726 5.41224 9.72526C5.35983 9.60326 5.33225 9.47204 5.33109 9.33926C5.32994 9.20648 5.35524 9.0748 5.40552 8.9519C5.4558 8.829 5.53006 8.71735 5.62395 8.62346C5.71784 8.52957 5.82949 8.45531 5.95239 8.40503C6.07529 8.35475 6.20696 8.32945 6.33974 8.3306C6.47252 8.33176 6.60374 8.35934 6.72575 8.41175C6.84775 8.46416 6.9581 8.54034 7.05034 8.63585L12.0003 13.5859L16.9503 8.63585C17.1389 8.4537 17.3915 8.3529 17.6537 8.35518C17.9159 8.35746 18.1668 8.46263 18.3522 8.64804C18.5376 8.83344 18.6427 9.08426 18.645 9.34645C18.6473 9.60865 18.5465 9.86125 18.3643 10.0499L12.7073 15.7069Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_16517_6200">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  ArrowDownLeft: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M6.99979 17L17.9998 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.13111 11C6.13111 11 5.65621 16.6335 6.51113 17.4885C7.36604 18.3434 12.9996 17.8684 12.9996 17.8684"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  ArrowDownRight: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M17 7L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Search: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#000000"
      fill="none"
      {...props}
    >
      <path
        d="M17.5 17.5L22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Clipboard: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.247 11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16.8538 7.43306C16.8538 8.24714 16.1901 8.90709 15.3714 8.90709C14.5527 8.90709 13.889 8.24714 13.889 7.43306C13.889 6.61898 14.5527 5.95904 15.3714 5.95904C16.1901 5.95904 16.8538 6.61898 16.8538 7.43306Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 20.9463L11.0477 21.2056C8.35403 21.9391 7.00722 22.3059 5.94619 21.6833C4.88517 21.0608 4.52429 19.6921 3.80253 16.9547L2.78182 13.0834C2.06006 10.346 1.69918 8.97731 2.31177 7.89904C2.84167 6.96631 4 7.00027 5.5 7.00015"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};
