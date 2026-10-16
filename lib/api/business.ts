import { apiClient } from "@/lib/api/client";
import type { BusinessCategory, BusinessRequestPayload, BusinessRequestResponse } from "@/lib/api/types";

export async function getBusinessCategories(): Promise<BusinessCategory[]> {
  const { data } = await apiClient.get<BusinessCategory[]>("/business-categories/");
  return data;
}

export async function submitBusinessRequest(
  payload: BusinessRequestPayload,
  photo: File | null
): Promise<BusinessRequestResponse> {
  const formData = new FormData();
  formData.append("data", JSON.stringify(payload));
  if (photo) formData.append("photo", photo);

  const { data } = await apiClient.post<BusinessRequestResponse>("/business-requests/", formData);
  return data;
}
