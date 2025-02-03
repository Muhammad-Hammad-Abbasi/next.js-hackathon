import { z } from "zod";

// Define Zod schema
const AddressSchema = z.object({
  name: z.string(),
  phone: z.string(),
  addressLine1: z.string(),
  addressLine2: z.string().optional(),
  cityLocality: z.string(),
  stateProvince: z.string(),
  postalCode: z.string(),
  countryCode: z.string().length(2), // ISO country code
  addressResidentialIndicator: z.enum(["yes", "no"]).optional()
});

const PackageSchema = z.object({
  /* Add your package fields here */
});

// Use in your POST handler
const { shipeToAddress, packages } = await req.json().then((body) => ({
  shipeToAddress: AddressSchema.parse(body.shipeToAddress), // Throws error if invalid
  packages: z.array(PackageSchema).parse(body.packages)
}));