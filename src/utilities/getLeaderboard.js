import { useEffect, useState } from "react";
import axios from "axios";

export default function GetLeaderboard(props) {
  const [guildId, setGuildId] = useState(0);
  const [entries, setEntries] = useState([]);
  const [nextOffset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [URL, setURL] = useState(undefined);

  useEffect(() => {
    setGuildId(props.match.params.guildId);
  }, [props, setGuildId]);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios({
      method: "GET",
      url: URL,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SKULDAPI_TOKEN}`,
      },
    })
      .then((res) => {
        if (res.data.success) {
          setEntries((entries) => entries.concat(res.data.data));
          setOffset((previousOffset) => previousOffset + res.data.data.length);
          setHasMore(res.data.data.length === 10);
        }
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });

    return () => cancel();
  }, [URL, setLoading, setHasMore, setEntries, setOffset]);

  return { setURL, loading, entries, nextOffset, hasMore, guildId };
}
