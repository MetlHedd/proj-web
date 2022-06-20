import Link from "next/link";

export default function Logo() {
  return (
    <div className="outline-4 outline-double p-2 cursor-pointer" style={{ outlineColor: '#cffbff' }}>
      <Link href="/">
        <>
          <div className="font-bold text-6xl text-center" style={{ color: '#5e17eb' }}>
            ROLE
          </div>
          <div className="font-serif text-center text-2xl text-white" style={{ textShadow: '0px 0px 13px rgba(255, 255, 255, 1)' }}>
            .com
          </div>
        </>
      </Link>
    </div>
  )
}