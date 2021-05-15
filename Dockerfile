FROM scratch
LABEL maintainer="hi@vega.xyz"

# Add Vega proto files
ADD /proto /proto

# Add third party proto files
ADD /external /external
