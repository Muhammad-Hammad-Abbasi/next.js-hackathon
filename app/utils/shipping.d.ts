
interface ShippingRequest {
    shipToAddress: Address;
    packages: Package[];
  }
  
  interface Address {
    // address fields
  }
  
  interface Package {
    // package dimensions/weight
  }