class Restaurant #< ActiveRecord::Base
  def self.search(location)
    location ||= '33.7722636,-84.3661896'
    base = "https://maps.googleapis.com/maps/api/"
    search_type = "place/nearbysearch/json"
    query = "?location=" + location + "&radius=800&opennow=true&types=restaurant&rating=3"
    # query = "?location=" + location + "&radius=1200&types=restaurant&rating=3"
    key = '&key=AIzaSyDtE-kWAsHzrb-z50xThCNsObxbR_9bl7E'
    
    query_url = base + search_type + query + key
    response = HTTParty.get query_url

  end  
end