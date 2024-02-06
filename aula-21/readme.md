# modificadores de eventos

A propagação do evento click será interrompida

´´´html
<a @click.stop='doThis'></a>
´´´
--

O evento submit deixará de recarregar a página

´´´html
<form @click.prevent='onSubmit'></form>
´´´
--

Modificadores podem ser encadeados

´´´html
<a @click.stop.prevent='doThat'></a>
´´´
---

É possível utilizar apenas o modificador
´´´html
<form v-on:submit.prevent='doThis'></form>
´´´
---

Usar modo de captura ao adicionar o evento
ou seja, um evento em um elemento interno é tratado aqui
após ser tratado por aquele elemento

´´´html
<div a @click.capture='doThis'>...</div>
´´´
---

Só aciona o manipulador se event.target é o próprio elemento 
isto é, não aciona a parte de um elemento filho
´´´html
<div @click.self='doThis'></div>
´´´
---

O evento click será disparado apenas uma vez
´´´html
<a @click.once='doThis'></a>
´´´
---

O comportamento padrão do evento scroll acontecerá imediatamente,
ao invés de aguardar onScroll completar para descobrir se ele
chama event.preventDefault()
´´´html
<a @click.passive='onScroll'></a>
´´´