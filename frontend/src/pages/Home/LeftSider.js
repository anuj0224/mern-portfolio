import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
        <div className="flex flex-col items-center">
            <div className="flex flex-col gap-3 sm:flex-row sm:text-3xl">
                <a href='https://www.facebook.com/profile.php?id=100090270788230&mibextid=ZbWKwL' ><i class="ri-facebook-circle-line text-gray-600 cursor-pointer "></i></a>
                <a href='https://www.instagram.com/anujmourya18_?igsh=ZTUwdjhzcWNvdXdt'><i class="ri-instagram-line text-gray-600 cursor-pointer"></i></a>
                <a href="mailto:mouryaanuj62@gmail.com" ><i class="ri-mail-line text-gray-600 cursor-pointer"></i></a>
                <a href='https://www.linkedin.com/in/anuj-mourya-73b697291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ><i class="ri-linkedin-box-line text-gray-600 cursor-pointer"></i></a>
                <a href='https://github.com/anuj0224' ><i class="ri-github-line text-gray-600 cursor-pointer"></i></a>
            </div>
            <div className='w-[1px] h-32 bg-[#125f63a7] sm:hidden'></div>
        </div>
    </div>
  )
}

export default LeftSider;