import { html } from 'htm/preact'
import { render } from 'preact'
import { useState } from 'preact/hooks'

function App (props) {
  const [liked, setLiked] = useState(false)

  return html`
    <div class="App">
      <h1>0️⃣ Preact Zero</h1>
      <button
        onclick=${e => setLiked(true)}
        disabled=${liked}
      >
        ${liked ? 'You liked this' : 'Like'}
      </button>
    </div>
  `
}

render(html`<${App} />`, document.body)
