import React from "react";

const Footer = () => {
  return (
    <div className="text-white text-center p-12 bg-black">
      <div className="flex justify-center items-center">
        <div className="basis-1/4">
          <div>
            <span className="font-bold text-2xl" style={{ backgroundColor: "#E61997" }}>
              ROLE.COM
            </span>
          </div>

          <div>A sua central de rolês!</div>
        </div>

        <div className="grow">
          <div className="flex gap-8 justify-center items-center">
            <div>
              <div className="font-bold">EXEMPLO DE PAINEL DE LINKS</div>

              <div>
                <div>
                  <a href="#">Link</a>
                </div>
                <div>
                  <a href="#">Link</a>
                </div>
                <div>
                  <a href="#">Link</a>
                </div>
              </div>
            </div>

            <div>
              <div className="font-bold">EXEMPLO DE PAINEL DE LINKS</div>

              <div>
                <div>
                  <a href="#">Link</a>
                </div>
                <div>
                  <a href="#">Link</a>
                </div>
                <div>
                  <a href="#">Link</a>
                </div>
              </div>
            </div>

            <div>
              <div className="font-bold">EXEMPLO DE PAINEL DE LINKS</div>

              <div>
                <div>
                  <a href="#">Link</a>
                </div>
                <div>
                  <a href="#">Link</a>
                </div>
                <div>
                  <a href="#">Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
