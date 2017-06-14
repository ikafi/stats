package fi.gosu.ika.stats.repository;

import fi.gosu.ika.stats.domain.SpyReport;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * SpyReport Repository
 *
 * @author Joppe151617
 * @since 0.1.0
 */
public interface SpyReportRepository extends JpaRepository<SpyReport, Long> {

    SpyReport findBySpyReportId(Long spyReportId);
}
