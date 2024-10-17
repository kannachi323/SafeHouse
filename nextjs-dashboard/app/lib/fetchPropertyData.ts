// lib/fetchPropertyData.ts

export const fetchPropertyData = async () => {
    try {
      const response = await fetch(
        'https://api.rentcast.io/v1/properties?address=5500%20Grand%20Lake%20Dr%2C%20San%20Antonio%2C%20TX%2C%2078244',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'X-Api-Key': process.env.NEXT_PUBLIC_RENTCAST_API_KEY as string,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching property data:', error);
      throw error;
    }
  };
  