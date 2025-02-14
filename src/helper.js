const generateTicket = (n) => {
    return Array.from({length: n}, () => Math.floor(Math.random() * 10))
  }
  const sum=(ticket)=>{
      return ticket.reduce((acc, curr) => acc + curr, 0)
  }
  export {generateTicket,sum};