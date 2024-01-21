import React from 'react'

export default function Footer(){
    return (
        <div className='flex justify-center items-center gap-5 py-5'>
      <a href="https://www.instagram.com/swaroop134" target="_blank">
        <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
      <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
      <a href="https://www.github.com/jyothiswaroop07" target="_blank">
      <i className="fa-brands fa-github-alt duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
    </div>
    )
}