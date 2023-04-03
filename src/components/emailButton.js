import Image from "next/image";
import mail from '@/../../public/envelope.png'


export default function EmailButton({email}) {
    const handleClick = () => {
        window.location.href = `mailto:${email}?subject=Informacion&body=Enviado%20desde%20AcapulcoEnLaPiel.com.mx`;
      };
    
  return (
    <Image onClick={handleClick} src={mail} alt={'Email Icono'} width={42} height={44}/>
   
  )
}
