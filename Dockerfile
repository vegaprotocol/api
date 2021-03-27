FROM scratch
LABEL maintainer="hi@vega.xyz"

# Add Vega proto files
ADD /grpc/proto /proto

# Add third party proto files
ADD /grpc/vendor /vendor
