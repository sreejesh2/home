# Dockerfile
FROM nginx:latest

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom configuration to the container
COPY nginx.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html
# Expose the custom port
EXPOSE 7777

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
