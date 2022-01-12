json.extract! cat, :id, :name, :age, :gender, :image_url, :breed_id, :created_at, :updated_at
json.url cat_url(cat, format: :json)
