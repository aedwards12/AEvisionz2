require 'dragonfly'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret "72170a77f307e18287e2ed728e17ae9ea5b50558970d3d2a16baff91f948f37a"

  url_format "/media/:job/:name"
	if Rails.env.test?
	  datastore :file,
	    root_path: Rails.root.join('public/system/dragonfly', Rails.env),
	    server_root: Rails.root.join('public')
	else
		datastore :s3,
			bucket_name: "aevisionzbucket",
			access_key_id: Rails.application.secrets.S3_KEY,
			secret_access_key: Rails.application.secrets.S3_SECRET,
			url_scheme: 'https'    
	end
end
# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
