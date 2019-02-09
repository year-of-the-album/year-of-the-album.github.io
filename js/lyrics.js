(function () {

  function lyrics () {
    document.querySelectorAll('lyrics').forEach((lyrics) => {
      replaceLyricsBlock(lyrics)
    })
  }

  function replaceLyricsBlock (lyricsElement) {
    let closed = false
    let actualHeight = null
    const blockquote = document.createElement('blockquote')
    blockquote.setAttribute('class', 'lyrics')
    const handle = document.createElement('a')
    handle.setAttribute('class', 'handle')
    blockquote.appendChild(handle)

    lyricsElement.before(blockquote)
    blockquote.appendChild(lyricsElement)
    actualHeight = lyricsElement.clientHeight

    handle.addEventListener('click', toggle)
    toggle()

    function toggle () {
      if (closed) {
        blockquote.classList.remove('closed')
        lyricsElement.style.height = `${actualHeight}px`;
        closed = false
      } else {
        blockquote.classList.add('closed')
        lyricsElement.style.height = `0`;
        closed = true
      }
    }
  }

  lyrics()

})()
