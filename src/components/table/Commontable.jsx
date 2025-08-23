import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const Commontable = ({ columns = [], data = [], actions }) => {
  return (
    <Box sx={{ p: 2 }}>
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.key} sx={{ fontWeight: "bold" }}>
                  {column.name}
                </TableCell>
              ))}
              {actions && (
                <TableCell sx={{ fontWeight: "bold" }}>Hành động</TableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} hover>
                {columns.map((column) => (
                  <TableCell key={column.key + item.id}>
                    {item[column.key]}
                  </TableCell>
                ))}

                {actions && (
                  <TableCell>
                    {actions.map((action, index) => {
                      if (typeof action === "function") {
                        const node = action(item);
                        return (
                          <Box
                            key={`${item.id}-action-${index}`}
                            component="span"
                            sx={{
                              borderRadius: "5px",
                              border: "none",
                              backgroundColor: "transparent",
                              cursor: "pointer",
                              display: "inline-flex",
                              padding: 1,
                              width: 32,
                              height: 32,
                              px: 1,
                              "&:hover": { backgroundColor: "#BDD6F6" },
                            }}
                          >
                            {node}
                          </Box>
                          //   <span key={index} style={{ marginRight: "8px" }}>
                          //     {node}
                          //   </span>
                        );
                      }
                      return (
                        <span key={index} style={{ marginRight: "8px" }}>
                          {action}
                        </span>
                      );
                    })}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { Commontable };
