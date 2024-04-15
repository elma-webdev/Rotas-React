import Card from './Card'
import produto1 from '../imagens/molhodeAlcaparras.webp'
import produto2 from '../imagens/molhodecerveja.webp'
import produto3 from '../imagens/frangoprovencal.webp'
import produto4 from '../imagens/pucherogaucho.webp'
import produto5 from '../imagens/mocoto.webp'
import produto6 from '../imagens/costela.jpg'
import produto7 from '../imagens/pavedepascoa.webp'
import produto8 from '../imagens/alfajor.webp'
import produto9 from '../imagens/docedeleite.webp'



function Pratos() {

  return (
    <main style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
    <Card 
    image={produto1}
    name="Molho de alcaparras para peixe"
    description="Esse molho de alcaparras para peixe é inspirado no clássico francês belle meunière. O belle meunière era uma receita simples usada para aproveitar a farinha dos moinhos. Depois de empanado, o peixe era finalizado com um molho bem simples com manteiga e salsinha ou coentro frescos."
    price="6200kz" 
    tag="Entrada"
    status="Disponível"
    />
    <Card 
    image={produto2}
    name="Molho de cerveja"
    description="Não deixe de experimentar este prático e irresistível molho de cerveja, também chamado molho à cervejeira, pronto em menos de 30 minutos! Sem dúvida que, com esse extra, a carne fica muito mais saborosa, por isso você não pode deixar de experimentar!"
    price="2000kz" 
    tag="Entrada"
    status="Disponível"
    />
    <Card 
    image={produto3}
    name="Frango à provençal"
    description="O frango à provençal é uma receita clássica do sul da França que traz todo o sabor e frescor mediterrâneo com ervas frescas, tomate e um toque de limão siciliano."
    price="1500kz" 
    tag="Entrada"
    status="Disponível"
    />
    <Card 
    image={produto4}
    name="Puchero Gaucho Tradicional"
    description="Esse molho de alcaparras para peixe é inspirado no clássico francês belle meunière. O belle meunière era uma receita simples usada para aproveitar a farinha dos moinhos. Depois de empanado, o peixe era finalizado com um molho bem simples com manteiga e salsinha ou coentro frescos."
    price="7000kz" 
    tag="Principal"
    status="Disponível"
    />
    <Card 
    image={produto5}
    name="Mocoto"
    description="O mocotó é um preparado bem brasileiro e inspiração portuguesa. Econômico e nutritivo, o mocotó tradicional é preparado com pata de boi (mocotó) e é popular no inverno, tanto para esquentar como para recuperar forças e energia após um dia de trabalho."
    price="2200kz" 
    tag="Principal"
    status="Disponível"
    />
    <Card 
    image={produto6}
    name="Costela assada na panela de pressão com batata"
    description="Que tal saborear uma costela suculenta assada com batatas na panela de pressão? A receita usa poucos ingredientes e é bem prática. A costela fica com aparência de carne assada e o sabor é incrível!"
    price="11000kz" 
    tag="Principal"
    status="Disponível"
    />
    <Card 
    image={produto7}
    name="Pavê de Páscoa"
    description="A receita de hoje é um delicioso pavê de Páscoa, opção para quem desejar surprender sem gastar muito, mas com muito sabor.Com camadas cremosas e equilíbrio entre os chocolates branco no recheio e meio amargo na cobertura, esta sobremesa se tornará sucesso absoluto na sua mesa de páscoa."
    price="1500kz" 
    tag="Sobremesa"
    status="Disponível"
    />
    <Card 
    image={produto8}
    name="Torta de alfajor"
    description="Se você gosta de alfajores não vai resistir a essa torta, pois é basicamente um alfajor extra grande que você pode compartir sem medo de querer comer mais. Seu sabor é delicioso e fará lembrar o famoso alfajor tradicinal argentino. Para decorar adicionaremos nozes que também darão uma textura crocante, ideal para a combinação de chocolate e doce de leite. Por outro lado, saiba também que é uma torta que você pode preparar para aniversários infantis, pois as crianças adoram alfajores"
    price="5000kz" 
    tag="Sobremesa"
    status="Disponível"
    />
    <Card 
    image={produto9}
    name="Doce de leite caseiro e cremoso"
    description="Doce de leite é um clássico que combina com tudo: bolos, frutas, tortas, panquecas, biscoitos. Sem dúvidas é um dos meus doces favoritos! Mas você já tentou fazer esse doce tão tradicional na sua casa?"
    price="2999kz" 
    tag="Sobremesa"
    status="Disponível"
    />
 
    </main>
  )
}

export default Pratos
