//api/location.js

export default function handler(req, res) {
      if (req.method == "GET") {
            const locations = ["Santa Cruz", "Riverside", "Davis", "Berkeley", "Los Angeles", "San Diego", "Santa Barbara"];
            const { loc } = req.query;
            console.log("Searching for location:", loc);
            
            if (!loc) {
                  return res.status(400).json({ error: "Missing query parameter 'name'" });
            }

            function findLocation(L) {
                  return L.toLowerCase().includes(loc.toLowerCase())
            }
            const filteredLocations = locations.filter(findLocation)
            res.status(200).json({location: filteredLocations});
      } else {
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
      }
}
