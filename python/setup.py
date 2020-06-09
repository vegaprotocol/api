import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="Vega API client",
    version="0.19.0",
    author="Vega",
    author_email="hi@vega.xyz",
    description="Vega API client for gRPC",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/vegaprotocol/vegaapiclient",
    packages=setuptools.find_packages(),
    package_data={"vegaapiclient": ["py.typed"],},
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    install_requires=["googleapis-common-protos", "grpcio", "requests",],
    zip_safe=False,
)
