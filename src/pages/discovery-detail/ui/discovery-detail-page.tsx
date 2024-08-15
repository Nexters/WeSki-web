'use client';

const DiscoveryDetailPage = ({ params }: { params: { resortId: number } }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return <DiscoveryDetailPageContent resortId={params.resortId} />;
};

const DiscoveryDetailPageContent = ({ resortId }: { resortId: number }) => {
  return <div>{resortId}</div>;
};

export default DiscoveryDetailPage;
