import { Bubble } from '@typebot.io/react'

const Chatbot = () => {
  return (
    <Bubble
      typebot="customer-support-pwjs745"
      previewMessage={{ message: 'Avez-vous une question?' }}
      theme={{ button: { backgroundColor: '#0042DA' } }}
    />
  )
}

export default Chatbot
