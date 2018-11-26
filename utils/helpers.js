export const getRightText = () => {
  const releaseDateTimestamp = 1543276800060
  return new Date().getTime() >= releaseDateTimestamp
    ? 'Acesse agora!'
    : 'Reserve sua vaga!'
}