require 'dragonfly'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret "72170a77f307e18287e2ed728e17ae9ea5b50558970d3d2a16baff91f948f37a"
  url_host 'http://d3qsxujqwcvsf0.cloudfront.net'
  # url_format "/:basename.:ext/media/:job/"
  # url_format "/:uid/"
  url_format "/:name"

  define_url do |app, job, opts| 
   # allows overriding urls - defaults to
    if job.step_types == [:fetch]    
    p "rubnby"       # app.server.url_for(job, opts)

     p app.datastore.url_for(job.uid)
    else
      p app.server.url_for(job, opts)

    end
  end

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
