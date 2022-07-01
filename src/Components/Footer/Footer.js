import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-neutral  text-white bottom-0">
      <div>
        <span class="footer-title">Services</span>
        <a href="link link-hover ">Facebook Marketing</a>
        <a href="link link-hover">Design</a>
        <a href="link link-hover">Marketing</a>
        <a href="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a href="link link-hover">About us</a>
        <a href="link link-hover">Contact</a>
        <a href="link link-hover">Jobs</a>
        <a href="link link-hover">Press kit</a>
      </div>
      <div>
        <div class="form-control w-80">
          <div class="relative">
            <h2 className="text-2xl font-bold text-left">ToDo</h2>
            <p className="text-left mt-2">
              &copy;All right reserved ToDo Apps {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
