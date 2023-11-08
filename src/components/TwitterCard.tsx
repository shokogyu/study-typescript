export const TwitterCard = () => {
  return (
    <div className="bg-gray-200 pt-20 pb-80 flex items-center justify-center">
      <div className="bg-white border-gray-200 p-4 rounded-xl border max-w-xl min-w-[480px]">
        {/* ユーザー */}
        <div className="flex items-center">
          <img
            className="h-11 w-11 rounded-full"
            src="https://doodleipsum.com/700/avatar-2?i=61a6f05eb01b598d39b032b2822e4e58"
            alt=""
          />
          <div className="ml-1.5 text-sm leading-tight">
            <span className="text-black font-bold block ">もも</span>
            <span className="text-gray-500 font-normal block">{`@momo`}</span>
          </div>
        </div>
        {/* 本文 */}
        <p className="text-black block text-xl leading-snug mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <img
          className="mt-2 rounded-2xl border border-gray-100"
          src="https://doodleipsum.com/700x400/hand-drawn?bg=825DEB&i=0e05d2d124e0a86b24727ce6006b739a"
          alt=""
        />
        <p className="text-gray-500 text-base py-1 my-0.5">11:22 AM · 2021年12月1日</p>
        {/* 統計 */}
        <div className="border-gray-200 border border-b-0 my-1" />
        <div className="text-gray-500 flex mt-3">
          <div key="77" className="flex items-center mr-6">
            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
            <span className="ml-3">777</span>
          </div>
          <div key="77" className="flex items-center mr-6">
            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
              <g>
                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
              </g>
            </svg>
            <span className="ml-3">777</span>
          </div>
          <div key="77" className="flex items-center mr-6">
            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
              <g>
                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
              </g>
            </svg>
            <span className="ml-3">777</span>
          </div>
        </div>
      </div>
    </div>
  );
};
