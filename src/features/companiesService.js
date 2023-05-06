const getCompanies = async () => {
    return fetch('https://sore-lime-goat-tam.cyclic.app/api/companies').then(
      (res) => res.json()
    );
  }


  const companiesService = {
    getCompanies,
  };
  
  export default companiesService;
